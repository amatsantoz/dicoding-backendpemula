const Hapi = require('@hapi/hapi');
// files
const routes = require('./routes');

const init = async () => {
    const server = Hapi.Server({
        port: 9000,
        host: process.env.NODE_ENV !== 'production' ? "localhost" : "0.0.0.0",
        routes: {
            cors: {
                origin: ["*"]
            }
        }
    });

    server.route(routes);
    await server.start();
    console.log('Server Berjalan di %s', server.info.uri);
};

init();