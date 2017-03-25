/*
 *--------------------------------------------
 *
 *  本程序由 Github 中文社区发布
 *      
 *  Github 仓库: https://github.com/k1995/BaiduyunSpider
 * 
 *  安装教程：http://www.githubs.cn/post/22
 *
 *  疑问？解答：http://www.githubs.cn/topic/118
 * ----------------------------------------*/

class SearchController {

    async index() {

        const keyword = this.params.q;

        if(!keyword) {

            this.redirect('/');
            return;
        }

        var resultModel = await this.fileService.search(keyword);

        this.render();
    }

    async test() {

        var resultModel = await this.fileService.test();

        this.render({
            count: resultModel.count,
            files: resultModel.model,
            error: resultModel.errorMessage
        }, {
            name: 'search/index'
        });
    }
}

module.exports = SearchController;