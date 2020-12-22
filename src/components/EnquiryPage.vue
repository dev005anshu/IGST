<template>
  <div class="myBox">
    <div v-if="this.loading" id="myDiv1">
        <div class="spinner-border loader text-primary" role="status"></div>
    </div>
      <div class="topMostHeader">IGST Validation Details Enquiry</div>
        <div class="topHeader">IGST Validation Details Enquiry</div>
        <div class="row myRow" style="display:none;">
            <div class="firstCol col-sm-4">ICEGATE ID</div>
            <div class="secondCol col-sm-8" ><input id="icegateId" type="test" /></div>
        </div>
        <div class="row myRow">
            <div class="firstCol col-sm-4">GSTIN</div>
            <div class="secondCol col-sm-8" ><input id="gstin" type="test" /></div>
        </div>
        <div class="row myRow">
            <div class="firstCol col-sm-4">Port Code</div>
            <div class="secondCol col-sm-5"><input  id="portCode" @input="portChanged()" type="test" placeholder="Enter port code" /></div>
            <div id="available" class="secondCol valid col-sm-3" style="display:none;">available</div>
            <div id="notAvailable" class="secondCol invalid col-sm-3" style="display:none;">Please enter a vaid port code</div>
            <div id="checkAvaialable" class="secondCol checkPort clickable col-sm-3" @click="checkAvailability()">Check availability</div>
        </div>
        <div class="row myRow">
            <div class="firstCol col-sm-4">Return month</div>
            <div class="secondCol col-sm-8">
                <div class="row">
                    <div class="col-sm-4">
                       <!-- Start Month Drop down -->
                       <select id="selector">
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                       <!-- End of Month drop down -->
                    </div>
                    <div class="scondCol col-sm-4">
                        <!-- Start year Drop down -->
                       <select id="yearSelector" >
                            <option v-for="year in years" :key="year.name">{{year.name}}</option>
                        </select>
                       <!-- End of year drop down -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row myRow">
            <div class="firstCol col-sm-4">Captcha</div>
            <div class="secondCol col-sm-8">
                <div class="row">
                    <div class="col-sm-7"><img id="capimg" name="imgCaptcha" src="CaptchaImg.jpg" />></div>
                    <div class="col-sm-3"><img class="reloadIcon clickable" @click="refreshCaptcha()" src="../assets/reload.png"/></div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
        </div>
        <div class="row myRow">
            <div class="col-sm-4"></div>
            <div class="secondCol col-sm-8"><input id="captcha" type="test" placeholder="Enter captcha" /></div>
        </div>
        <div class="row btnRow">
            <div class="col-sm-3"></div>
            <div class="col-sm-3"></div>
            <div class="col-sm-3"><div class="btns clickable" @click="submitForm()">Submit</div></div>
            <div class="col-sm-3"><div class="btns clickable">Reset</div></div>
        </div>
  </div>
</template>

<script>
import Service from "../services/ServiceRouters.js";
export default {
  name: 'EnquiryPage',
//   props: {
//     msg: String
//   },
  data() {
    return {
      years: [{"name":2017},{"name":2018},{"name":2019}],
      loading: false,
      listOfDetails: [],
      validPortCode: false
    };
  },
  mounted() {
      this.$store.commit("documentList/setListOfDetails", []);
          this.$store.commit("documentList/setGstin", "");
          this.$store.commit("documentList/setPortcode", "");
      
  },
  methods: {
      submitForm(){
          this.$store.commit("documentList/setListOfDetails", []);
          this.$store.commit("documentList/setGstin", "");
          this.$store.commit("documentList/setPortcode", "");
          
          var captchaText=document.getElementById("captcha").value;
        //   var icegateIDText=document.getElementById("icegateId").value;
          var portCodeText=document.getElementById("portCode").value;
          var gstinText=document.getElementById("gstin").value;
          var monthValue=document.querySelector('#selector').value
          var yearValue=document.querySelector('#yearSelector').value
          var inputdata = {
            gstin: gstinText,
            captcha: captchaText,
            // icegateid: icegateIDText,
            portCode: portCodeText,
            returnMonth: monthValue,
            returnYear: yearValue
          };
          console.log("input"+JSON.stringify(inputdata))
        if(this.validPortCode){
         if(captchaText && portCodeText && gstinText && monthValue && yearValue){
            this.loading=true
            const response = Service.submitFormData(inputdata);
            console.log("this the res", response);
            // var myArray=[{
            //     gstin: "1234567878941",
            //     sbNumber: "1245875",
            //     returnMonth: "Mar",
            //     portCode: "4585113",
            //     invoiceNumber: "666",
            //     invoiceDate: "654512",
            //     responseCode: "rs cd",
            //     sbDate: "466513261",
            //     processedOn:"2154841",
            //     sbType:"97932326404"
            //   },
            //   {
            //     gstin: "12345678941",
            //     sbNumber: "1245875",
            //     returnMonth: "Mar",
            //     portCode: "4585113",
            //     invoiceNumber: "666",
            //     invoiceDate: "654512",
            //     responseCode: "",
            //     sbDate: "466513261",
            //     processedOn:"2154841",
            //     sbType:"97932326404"
            //   }]
            // this.listOfDetails.push(myArray);
            if(response.data){
                var myArray=response.data.lisDetailsOutputDtos
                this.$store.commit("documentList/setListOfDetails", myArray);
                this.$store.commit("documentList/setGstin", "gst456");
                this.$store.commit("documentList/setPortcode", "port58");

                this.loading=false;
                this.$router.push({ name: "SuccessPage" });
            }
            
          }else{
              alert("Please fill all mandatory fields.")
          }
        }else{
            alert("Please enter a valid port code and check availability.")
        }
      },
      dataValidation(){
          if(document.getElementById("icegateId").value&document.getElementById("portCode").value&document.getElementById("gstin").value){
            return true
          }
          return false;
      },
      checkAvailability(){
          if(document.getElementById("portCode").value){
            this.loading=true
            this.validPortCode=false
            const response = Service.checkingPortAvailability(document.getElementById("portCode").value);
            console.log("this the res", response);
            if(response.data){
                document.getElementById("checkAvaialable").style.display='none';
                document.getElementById("notAvailable").style.display='none';
                document.getElementById("available").style.display='block';
                this.validPortCode=true
            }else{
                document.getElementById("checkAvaialable").style.display='none';
                document.getElementById("notAvailable").style.display='block';
                document.getElementById("available").style.display='none';
                this.validPortCode=false
            }
            
            this.loading=false
          }else{
              alert("Please enter a valid port code.")
          }
      },
      refreshCaptcha(){
          document.getElementById("capimg").src='CaptchaImg.jpg?'+ Math.random();
          return false;
      },
      portChanged(){
        document.getElementById("checkAvaialable").style.display='block';
        document.getElementById("notAvailable").style.display='none';
        document.getElementById("available").style.display='none';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBox{
    margin: 0px 400px;
}
.topMostHeader{
    text-align: left;
    font-size: 25px;
}
.topHeader{
    text-align: center;
    color:white;
    background-color: #051575;
    font-size: 25px;
}
.firstCol{
    text-align: end;
}
.secondCol{
    text-align: start;
}
.myRow{
    margin: 3px 0px;
}
.reloadIcon{
    width: 25px;
}
.checkPort{
    font-size: 14px;
    color: blue;
    padding: 0px;
}
.btnRow{
    margin: 15px;
}
.btns{
    background: red;
    color: white;
    border-radius: 5px;
    text-align: center;
}
.clickable{
    cursor: pointer;
}
.valid{
    font-weight: bold;
    color: green;
}
.invalid{
    font-weight: bold;
    color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body{
      z-index: -1;
}
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  width: 120px;
  height: 120px;

}
#myDiv1 {
  display: block;
  text-align: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  opacity: 0.7;
  z-index: 99;
}
</style>
