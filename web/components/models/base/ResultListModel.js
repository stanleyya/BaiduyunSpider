const ResultModel = require('./ResultModel');

class ResultListModel extends ResultModel{

    constructor() {
        
        super();
        //总数
        this.total = 0;
        //总页数
        this.page = 0;
    }
}

module.exports = ResultListModel;