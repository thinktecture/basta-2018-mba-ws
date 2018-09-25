
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Serverless
{
    public static class AddSession
    {
        [FunctionName("AddSession")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "POST", Route = "sessions")]
            Session newSession,
            //[CosmosDB("conferences", "data", ConnectionStringSetting="CosmosDB")]
            //out Session document,
            ILogger log)
        {
            // TODO: Security ;-)
            // TODO: Validation!

            newSession.Id = Guid.NewGuid();

            //document = newSession;

            // TODO: Exception handling!
            return new OkResult();
        }
    }
}
