import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag"
import { User } from "./User"

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string

  @Column({ name: "user_sender_id" })
  userSenderId: string

  @JoinColumn({ name: "user_sender_id" })
  @ManyToOne(() => User)
  userSender: User

  @Column({ name: "user_receiver_id" })
  userReceiverId: string

  @JoinColumn({ name: "user_receiver_id" })
  @ManyToOne(() => User)
  userReceiver: User

  @Column({ name: "tag_id" })
  tagId: string

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string

  @CreateDateColumn(({ name: "created_at"}))
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at"})
  updatedAt: Date

  constructor() {
    if ( !this.id ) {
      this.id = uuid()
    }
  }
}

export { Compliment }
