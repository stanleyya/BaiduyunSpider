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

exports.index = function () {

    this.render();
}

exports.header = function () {

    this.render();
}

/**
 * 顶部菜单栏
 */
exports.menus = function () {

    var menus = [
        {
            clazz: '',
            items: [
                {
                    controller: 'index',
                    action: 'index',
                    name: '百度云盘',
                    url: '/'
                }
            ]
        },
        {
            clazz: 'navbar-right',
            items: [
                {
                    controller: 'index',
                    action: 'contact',
                    name: '联系我们',
                    url: '/contact'
                }
            ] 
        }
    ];

    menus = menus.map((menu) => {

        menu.items.map((item) => {
            
            item.clazz = this.routeInfo && item.action == this.routeInfo.action ?
                    'active' : '';
            return item;
        });

        return menu;
    });

    this.render({
        menus: menus
    });
}