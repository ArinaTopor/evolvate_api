import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = 5000
  const app = await NestFactory.create(AppModule, { cors: true });


  const config = new DocumentBuilder()
    .setTitle('Evolvate API')
    .setDescription('Документация')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  
  await app.listen(PORT, () => console.log(`Server start port = ${PORT}`));
}
start();
