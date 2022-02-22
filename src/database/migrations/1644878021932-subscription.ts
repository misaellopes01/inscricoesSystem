import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class subscription1644878021932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'subscriptions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'course_id',
                        type: 'uuid'
                    },
                    {
                        name: 'state',
                        type: 'enum',
                        enum: ['pending', 'completed']
                    },
                    {
                        name: 'bi',
                        type: 'varchar'
                    },
                    {
                        name: 'certificate',
                        type: 'varchar'
                    },
                    {
                        name: 'picture',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKSubscriptionUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKSubscriptionCourse',
                        referencedTableName: 'courses',
                        referencedColumnNames: ['id'],
                        columnNames: ['course_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subscriptions')
    }

}
