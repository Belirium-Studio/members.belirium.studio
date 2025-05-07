import type { LoaderFunctionArgs } from "react-router";
import type Member from "../../common/types/Member";
import MemberService from "../../member/services/MemberService";

export interface MemberLoaderData {
    member: Member;
}

export async function memberLoader({params}: LoaderFunctionArgs): Promise<MemberLoaderData> {
    const member = await MemberService.get(params.member as string);
    return  {
        member
    }
}