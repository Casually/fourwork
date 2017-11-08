function initWorkView() {
    clearWorkFieldAll();
    for(var i=0;i<workContextData.length;i++){
        switch (workContextData[i].type){
            case "ZYBJJ":
                apendWorkData("ZYBJJ",workContextData[i]);
                break;
            case "ZYQJJ":
                apendWorkData("ZYQJJ",workContextData[i]);
                break;
            case "BZYDJJ":
                apendWorkData("BZYDJJ",workContextData[i]);
                break;
            case "BZYBJJ":
                apendWorkData("BZYBJJ",workContextData[i]);
                break;
        }
    }
}

/**
 * 对应任务栏那增加任务
 * @param id
 * @param wcd
 */
function apendWorkData(id,wcd) {
    var conStr = '<div class="panel-context">'+
                    '<label>'+
                        '<input type="checkbox"><span style="margin-left: 5px;">'+ wcd.title + '(' + wcd.time + ')</span>'+
                    '</label>'+
                '</div>';
    $("#"+ id).append(conStr);
}

/**
 * 清空所有工作栏位
 */
function clearWorkFieldAll() {
    $("#ZYBJJ").html("这里放重要不紧急的代办事情");
    $("#ZYQJJ").html("这里放重要且紧急的代办事情");
    $("#BZYBJJ").html("这里放不重要不紧急的代办事情");
    $("#BZYDJJ").html("这里放不重要但紧急的代办事情");
}