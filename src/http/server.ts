import { Elysia, t } from 'elysia';
import { registerRestaurant } from './routes/register-restaurant';
import { sendAuthLink } from './routes/send-auth-link';
import jwt from '@elysiajs/jwt';
import { env } from '../env';
import cookie from '@elysiajs/cookie';

const app = new Elysia()
  .use(jwt({
    secret: env.JWT_SECRET_KEY,
    schema: t.Object({
      sub: t.String(),
      restaurantId: t.Optional(t.String()),
    })
  }))
  .use(registerRestaurant)
  .use(sendAuthLink)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
