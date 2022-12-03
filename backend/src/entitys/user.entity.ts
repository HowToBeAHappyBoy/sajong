import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, nullable: false, unique: true, name: 'kakao_id' })
  kakaoId: string;
}
