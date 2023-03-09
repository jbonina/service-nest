import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ErrorLog } from './error-log/Domain/error-log.entity';


export const ORMConfig: PostgresConnectionOptions  = {
    type: 'postgres',
    host: '192.168.1.191',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'error-log',
    //entities: [`${__dirname}/**/*.entity{.ts,.js}`],  // ORIGINAL
    entities: [ErrorLog],
    synchronize: true
};