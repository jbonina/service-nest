import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { ErrorLog } from "../Domain/error-log.entity";
import { CreateErrorLogDTO } from "./create-error-log.dto";
import { ReadErrorLogDTO } from "./read-error-log.dto";
import { UpdateErrorLogDTO } from "./update-error-log.dto";

@Injectable()
export class ErrorLogMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ErrorLog, ReadErrorLogDTO);
      createMap(mapper, CreateErrorLogDTO, ErrorLog, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateErrorLogDTO, ErrorLog);
    };
  }
}