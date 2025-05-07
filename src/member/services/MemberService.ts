import { ServiceBase } from "../../common/services/ServiceBase";
import type Member from "../../common/types/Member";

class MemberService extends ServiceBase {
    public async get(member: string) : Promise<Member> {
        return await super._get<Member>(`/static/${member}/member.json`);
    }
}

const service = new MemberService();

export default service;