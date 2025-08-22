import { rootApiSlice } from "./rootApiSlice";
import { ApiPaths } from "../../constanse/apiPath";


const authApi = rootApiSlice.injectEndpoints({
endpoints: (builder) => ({
   login : builder.mutation({
    query: (credentials) => ({
        url: ApiPaths.login,
        method: 'POST',
        body: credentials,
    }),
   })
    }),
    


});

export const { useLoginMutation } = authApi;