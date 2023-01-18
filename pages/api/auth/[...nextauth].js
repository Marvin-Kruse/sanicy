import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Discord({
      clientId: '791992849578065921',
      clientSecret: 'qkUf_uBSLbKyzNV1_fTzH54_Xfeyez7b',
      authorization: { params: { scope: 'identify guilds email' } },
      
    })
  ],
  session: {
    jwt: true
  },
  jwt: {
    secret: 'efjeojgpüoeögjgrrü+g0krü0gürgüegjpüepjgäpegäüpejg'
  }
});
