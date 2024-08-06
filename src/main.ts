import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT
  const app = await NestFactory.create(AppModule, { cors: true });


  const config = new DocumentBuilder()
    .setTitle('Evolvate API')
    .setDescription('Документация')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(PORT, () => console.log(`Server start port = ${PORT}`));
}
start();