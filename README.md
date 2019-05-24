## vue项目
[vue后台管理系统](https://caizx94.github.io/vue-admin/index.html#/index/setting)

基于vue + element ui 开发，因为没有服务器和数据库，所以数据是使用localStroage和SessionStroage缓存,续会继续维护，完善功能

#### 目前功能
- 登录
- 权限控制 （有超管，普通管理员，用户三种角色，不同角色操作权限不同。用户没有用户管理和权限管理的权限，普通管理员有用户管理的权限，超管两者都有）
- 用户管理，包括新增，编辑，删除，复制用户 （超管权限和普通管理员权限）
- 权限管理，包括新增，编辑，删除，复制管理员 （超管权限）
- 语言国际化，可以中英文切换

#### 账号管理
 _ |用户 | 普通管理员 | 超级管理员 
------| -----|----------|---------
账号  | czx  | admin    | superAdmin
密码  | czx  | admin    | superAdmin
