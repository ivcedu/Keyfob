////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get AD login info ///////////////////////////////////////////////////////////
function getLoginUserInfo(php_file, user, pass) {
    var result = new Array();
    $.ajax({
        type:"POST",
        datatype:"json",
        url:php_file,
        data:{username:user, password:pass},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get DB //////////////////////////////////////////////////////////////////////
function db_getBuildingList() {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getBuildingList.php",
        data:{AdminEmail:AdminEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// insert DB ///////////////////////////////////////////////////////////////////
//function db_insertProctor(StuName, StuEmail, StuID, InstName, InstEmail, CourseID, SectionNum, TestDate, TestTime, Comments) {
//    var ResultID = "";
//    $.ajax({
//        type:"POST",
//        url:"php/db_insertProctor.php",
//        data:{StuName:StuName, StuEmail:StuEmail, StuID:StuID, InstName:InstName, InstEmail:InstEmail, CourseID:CourseID, 
//                SectionNum:SectionNum, TestDate:TestDate, TestTime:TestTime, Comments:Comments},
//        async: false,  
//        success:function(data) {
//            ResultID = JSON.parse(data);
//        }
//    });
//    return ResultID;
//}

// update DB ///////////////////////////////////////////////////////////////////
//function db_updateProctorStatus(ProctorID, StatusID, Column) {
//    var Result = false;
//    $.ajax({
//        type:"POST",
//        url:"php/db_updateProctorStatus.php",
//        data:{ProctorID:ProctorID, StatusID:StatusID, Column:Column},
//        async: false,  
//        success:function(data) {
//            Result = JSON.parse(data);
//        }
//    });
//    return Result;
//}

// upload attach file //////////////////////////////////////////////////////////
//function uploadAttachFile(file_data) {
//    var Result = "";
//    $.ajax({  
//        url: "php/upload_attach_file.php",  
//        type: "POST",  
//        data: file_data,
//        processData: false,  
//        contentType: false,  
//        async: false,
//        success:function(data) {
//            Result = JSON.parse(data);
//        }  
//    });
//    return Result;
//}