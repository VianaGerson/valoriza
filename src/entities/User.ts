import { Exclude } from "class-transformer"
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          name:
 *            type: string
 *            minimum: 2
 *            maximum": 255
 *          email:
 *            type: string
 *            format: email
 *            description: O email deve ser unico.
 *          password:
 *            type: string
 *            format: password
 *            minimum: 6
 *            maximum": 12
 *          isAdmin:
 *            type: boolean
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 *           password: teste123
 */
@Entity("users")
class User {

  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @Column({ name: "is_admin", default: false })
  isAdmin: boolean

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

export { User }
