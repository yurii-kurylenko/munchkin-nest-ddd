import { AbstractMongooseRepository } from "src/shared";
import { Munchkin, MunchkinProps } from "./munchkin.entity";
import { Model } from "mongoose";
import { MunchkinDocument } from "./munchkin.document";
import { InjectModel } from "@nestjs/mongoose";
import { CardsService, EquipmentsService } from "../../cards";

export class MunchkinsRepository extends AbstractMongooseRepository<Munchkin, MunchkinDocument> {
  constructor(
    @InjectModel("MunchkinDocument") private readonly munchkinDocModel: Model<MunchkinDocument>,
    private readonly cardsService: CardsService,
    private readonly equipmentsService: EquipmentsService,
  ) {
    super(munchkinDocModel);
  }

  buildEntityFromDocument(document: MunchkinDocument): Munchkin {
    const { cardsInHands, hat, rightHand, leftHand, body, shoes, allHands, extraEquipment, inactiveEquipment } = document;
    const muchkinProps: MunchkinProps = {
      ...document,
      cardsInHands: cardsInHands.map(cardCode => this.cardsService.getCardByCode(cardCode)),
      hat: hat && this.equipmentsService.getEquipmentByCode(hat),
      rightHand: rightHand && this.equipmentsService.getEquipmentByCode(rightHand),
      leftHand: leftHand && this.equipmentsService.getEquipmentByCode(leftHand),
      body: body && this.equipmentsService.getEquipmentByCode(body),
      shoes: shoes && this.equipmentsService.getEquipmentByCode(shoes),
      allHands: allHands && this.equipmentsService.getEquipmentByCode(allHands),
      extraEquipment: extraEquipment.map(eqCode => this.equipmentsService.getEquipmentByCode(eqCode)),
      inactiveEquipment: inactiveEquipment.map(eqCode => this.equipmentsService.getEquipmentByCode(eqCode)),
    };
    return Munchkin.createMunchkin(muchkinProps, document.id);
  }

  buildDocumentFromEntity(entity: Munchkin): MunchkinDocument {
    const snapshot = entity.getSnapshot();
    return {
      ...snapshot,
      cardsInHands: snapshot.cardsInHands.map(card => card.code),
      hat: snapshot.hat?.equipmentCode,
      rightHand: snapshot.rightHand?.equipmentCode,
      leftHand: snapshot.leftHand?.equipmentCode,
      body: snapshot.body?.equipmentCode,
      shoes: snapshot.shoes?.equipmentCode,
      allHands: snapshot.allHands?.equipmentCode,
      extraEquipment: snapshot.extraEquipment.map(eq => eq.equipmentCode),
      inactiveEquipment: snapshot.inactiveEquipment.map(eq => eq.equipmentCode),
    } as MunchkinDocument;
  }
}
