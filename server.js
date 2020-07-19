const path = require('path');

const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const WEBAPPS_ROOT = path.join(__dirname, './webapps');

const router = new Router();
router.get('/beacon', (ctx, next) => {
  const { query, response, cookies } = ctx;
  const key = 'username';
  let username = cookies.get(key);
  if(!username){
    username = Math.random().toString(16).substring(2);
    const expires = new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1e3);
    cookies.set(key, username, { expires });
  }
  const{ cb } = query;
  if(cb){
    response.body = `${ cb }(${ JSON.stringify({ username })})`;
  }else{
    response.body = { username }
  }
});

const app = new Koa();
app
.use(serve(WEBAPPS_ROOT))
.use(router.routes())
.use(router.allowedMethods());

app.listen(8080);
console.log('running!');
