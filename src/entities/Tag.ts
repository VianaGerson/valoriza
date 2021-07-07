import { Expose } from "class-transformer"
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

/**
 * @swagger
 *  components:
 *    schemas:
 *      Tag:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            minimum: 2
 *            maximum": 50
 *        example:
 *           name: Inspiração
 */
@Entity("tags")
class Tag {

  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn({ name: "created_at"})
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at"})
  updatedAt: Date

  @Expose({ name: "nameCustom"})
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if ( !this.id ) {
      this.id = uuid()
    }
  }
}

export { Tag }
