
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
    public static class GetSessionsDetails
    {
        [FunctionName("GetSessionsDetails")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET", Route = "sessions/{id}")]
            HttpRequest req,
            [CosmosDB("conferences", "data", ConnectionStringSetting="CosmosDB", Id="{id}")]
            Session session,
            ILogger log)
        {
            // TODO: handle exceptions
            if (session == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(session);
        }
    }
}
