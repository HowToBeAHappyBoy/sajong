import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wish_list' })
export class WishList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ length: 200, nullable: false, name: 'title' })
  title: string;

  @Column({ length: 1000, nullable: false, name: 'image_path' })
  imagePath: string;

  @Column({ length: 2000, nullable: false, name: 'link' })
  link: string;

  @Column({ length: 2000, nullable: false, name: 'description' })
  description: string;
}
