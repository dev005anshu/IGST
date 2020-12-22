<template>
  <div class="myBox">
    <div v-if="this.loading" id="myDiv1">
        <div v-if="this.loading" class="spinner-border loader text-primary" role="status"></div>
    </div>
      <div class="topMostHeader">IGST Validation Details Enquiry</div>
        <!-- <div class="topHeader">IGST Validation Details Enquiry</div> -->
        <div class="firstTable">
            <div class="row myRow">
                <div class="headerDiv col-sm-3">GSTIN No</div>
                <div class="headerDiv col-sm-3">Port Code</div>
                <div class="secondCol col-sm-3"></div>
                <div class="secondCol col-sm-3"></div>
            </div>
        </div>
        <div class="firstTableRows">
            <div class="row myRow">
                <div class="tableRowDiv col-sm-3">{{this.gstin}}</div>
                <div class="tableRowDiv col-sm-3">{{this.portcode}}</div>
                <div class="secondCol col-sm-3"></div>
                <div class="secondCol col-sm-3"></div>
            </div>
        </div>
        
        <div class="secondTable">
            <div class="row myRow">
                <div class="headerDiv col-sm-1">Shipping Bill Number</div>
                <div class="headerDiv col-sm-1">Shipping Bill Date</div>
                <div class="headerDiv col-sm-1">Return Month</div>
                <div class="headerDiv col-sm-1"> Invoice Number </div>
                <div class="headerDiv col-sm-1"> Invoice Date </div>
                <div class="headerDiv col-sm-1"> Response code </div>
                <div class="headerDiv col-sm-1"> Processed Date </div>
                <div class="headerDiv col-sm-1">Shipping Bill Type</div>
            </div>
        </div>
        <div class="secondTableRows">
            <div class="row myRow" v-for="detail in listOfDetails" :key="detail.gstin">
                <div class="tableRowDiv col-sm-1">{{detail.sbNumber}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.sbDate}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.returnMonth}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.invoiceNumber}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.invoiceDate}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.responseCode}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.processedOn}}</div>
                <div class="tableRowDiv col-sm-1">{{detail.sbType}}</div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  props: {
    msg: String
  },
  data() {
    return {
      listOfDetails: this.$store.getters["documentList/getListOfDetails"],
      gstin: this.$store.getters["documentList/getGstin"],
      portcode: this.$store.getters["documentList/getPortcode"],
      loading: false
    };
  },
  mounted() {
      if(!this.$store.getters["documentList/getGstin"]){
        this.$router.push({ name: "EnquiryPage" });
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBox{
    margin: 0px 50px 0px 250px;
}
.topMostHeader{
    text-align: left;
    font-size: 25px;
    border-bottom: solid 1px;
    color: brown;
    margin-bottom: 10px;
}
.topHeader{
    text-align: center;
    color:white;
    background-color: #051575;
    font-size: 25px;
}
.headerDiv{
    padding: 0px;
    background-color: #051575;
    color: white;
    text-align: center;
    font-size: 13px;
}
.tableRowDiv{
    padding: 0px;
    border: solid 1px;
    font-size: 11px;
     text-align: center;
}
.firstCol{
    text-align: end;
}
.secondCol{
    text-align: start;
}
.myRow{
    margin: 0px 0px;
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
}
.clickable{
    cursor: pointer;
}
.secondTable{
    margin-top:15px;
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
