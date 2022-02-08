import { Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query((returns) => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }

  @Query((returns) => Restaurant)
  myRestaurant(): Boolean {
    return true;
  }
}
