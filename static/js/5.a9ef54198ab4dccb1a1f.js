webpackJsonp([5],{TSNV:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.el-header {\n\tline-height: 60px;\n}\n",""])},XW6U:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("vLgD");var l={data:function(){return{dialogVisible:!1,dialogMark:"",queryGradeForm:{startGrade:null,endGrade:null},editGradeForm:{startGrade:"",endGrade:""},multipleSelection:[],dataList:[],total:0,curPage:1,pageSize:10}},computed:{tableData:function(){return this.dataList.slice(this.curPage*this.pageSize-this.pageSize,this.curPage*this.pageSize)}},mounted:function(){this.queryGradeAction()},methods:{handleSizeChange:function(e){console.log("SizeChange 每页 "+e+" 条"),this.pageSize=e},handleCurrentChange:function(e){console.log("CurrentChange 当前页: "+e),this.curPage=e},handleSelectionChange:function(e){this.multipleSelection=e,_log("选中的学届列表",e)},queryGradeAction:function(){var e,t=this;console.log("查询学届",this.queryGradeForm),(e=this.queryGradeForm,Object(r.a)({url:"/grade/list",method:"post",data:e})).then(function(e){console.log("查询学届",e.data);var a=e.data;0===a.ret&&(t.dataList=a.dataList,t.total=a.dataList.length)})},addGradeBtnClick:function(){this.dialogVisible=!0,this.editGradeForm={startGrade:"",endGrade:""}},addGradeAction:function(){var e,t=this;_log("新增学届",this.editGradeForm),(e=this.editGradeForm,Object(r.a)({url:"/grade",method:"post",data:e})).then(function(e){console.log("新增学届",e),0===e.data.ret&&(t.$message({message:"学届添加创建成功",type:"success"}),t.dialogVisible=!1,t.queryGradeAction())})},delGradeBtnClick:function(){var e=[];this.multipleSelection.forEach(function(t,a){e.push(t.gradeYear)}),0!=e.length?this.delGradeAction(e):this.$message({message:"请选择一条记录",type:"warning"})},delGradeClick:function(e){var t=e.row.gradeYear;this.delGradeAction([t])},delGradeAction:function(e){var t=this;console.log("要删除的id",e),this.$confirm("此操作将删除这条记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a={ids:e},Object(r.a)({url:"/grade",method:"delete",data:a})).then(function(e){var a=e.data;console.log("delGrade",a),0===a.ret&&(t.$message({message:"学届删除成功",type:"success"}),t.dialogVisible=!1,t.queryGradeAction())})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-header",[e._v("学届管理")]),e._v(" "),a("el-main",[a("el-form",{attrs:{model:e.queryGradeForm,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"开始学届"}},[a("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"选择年"},model:{value:e.queryGradeForm.startGrade,callback:function(t){e.$set(e.queryGradeForm,"startGrade",t)},expression:"queryGradeForm.startGrade"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束学届"}},[a("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"选择年"},model:{value:e.queryGradeForm.endGrade,callback:function(t){e.$set(e.queryGradeForm,"endGrade",t)},expression:"queryGradeForm.endGrade"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"small"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.queryGradeAction}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.addGradeBtnClick}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.delGradeBtnClick}},[e._v("删除")])],1)],1),e._v(" "),a("el-table",{attrs:{height:"480",data:e.tableData,border:"",stripe:"",size:"small"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"icon-btn-del",attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(a){e.delGradeClick(t)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"gradeName",label:"学届名称",width:""}})],1),e._v(" "),a("div",{staticClass:"pagination",staticStyle:{"margin-top":"10px"}},[a("el-pagination",{attrs:{"page-sizes":[10,20,30],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"添加记录",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.editGradeForm,"label-width":"100px","label-position":"right",size:"small"}},[a("el-form-item",{attrs:{label:"学届开始"}},[a("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"选择年"},model:{value:e.editGradeForm.startGrade,callback:function(t){e.$set(e.editGradeForm,"startGrade",t)},expression:"editGradeForm.startGrade"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"学届结束"}},[a("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"选择年"},model:{value:e.editGradeForm.endGrade,callback:function(t){e.$set(e.editGradeForm,"endGrade",t)},expression:"editGradeForm.endGrade"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addGradeAction}},[e._v("提 交")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(e){a("vfy4")},null,null);t.default=n.exports},vfy4:function(e,t,a){var r=a("TSNV");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("ba9af146",r,!0)}});