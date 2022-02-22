import { Course } from "../../../modules/courses/entities/Course";
import { User } from "../../../modules/users/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

export enum OperationType {
    PENDING = 'pending',
    COMPLETED = 'completed',
  }

@Entity('subscriptions')
export class Subscription{
    
    @PrimaryColumn()
    id: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: string

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column()
    course_id: string

    @Column({ type: 'enum', enum: OperationType })
    state: OperationType

    @Column()
    bi: string

    @Column()
    certificate: string

    @Column()
    picture: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}