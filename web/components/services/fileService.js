const ResultListModel = require('../models/base/ResultListModel');

var sequelize;

class FileService {

    constructor(app) {

        sequelize = app.context.sequelize;
    }

    async search(keyword) {

        var result = new ResultListModel();
    }

    async test(keyword) {

        var result = new ResultListModel();
        var sql = 'SELECT * FROM share_file limit 10';
        var rows = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

        if (!rows || rows.length < 1) {

            result.errorMessage = '空空如也。';
            return result;
        }

        result.success = true;
        result.model = getFileListModel(rows);
        //result.total = 
        return result;
    }
}

function getFileModel(row) {

    var url = row.shorturl ? `https://pan.baidu.com/${row.shorturl}` : '';
    return {
        title: row.title,   //标题
        url: `/file/{row.fid}`, //文件详情地址
        realUrl: url, //百度网盘的详情地址
        type: '', //类型名称：视频、压缩包...
        views: row.views //浏览次数
    }
}

function getFileListModel(rows) {

    return rows.map(getFileModel);
}

module.exports = FileService;