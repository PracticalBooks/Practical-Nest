import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  createOrUpdate(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }

  findByUserId(id: number): Promise<Order[]> {
    return this.ordersRepository.find({
      where: {
        user: { id: id },
      },
      relations: ['items', 'items.product'],
    });
  }
}
