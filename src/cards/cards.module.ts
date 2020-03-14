import { Module } from "@nestjs/common";
import { CardsService } from "./cards.service";
import { EquipmentsService } from "./equipments.service";

@Module({
  imports: [],
  controllers: [],
  providers: [CardsService, EquipmentsService],
  exports: [CardsService, EquipmentsService],
})
export class CardsModule {}
