import { CoreEntity } from '@common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity extends CoreEntity {
  @Column({ name: 'nome', type: 'varchar' })
  nome: string;

  @Column({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @Column({ name: 'senha', type: 'varchar' })
  senha: string;
}
