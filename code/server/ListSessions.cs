
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
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Serverless
{
    public static class ListSessions
    {
        [FunctionName("ListSessions")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET", Route = "sessions")]
            HttpRequest req,
            [CosmosDB("conferences", "data", ConnectionStringSetting="CosmosDB")]
            IEnumerable<Session> sessions,
            ILogger log)
        {
            return new OkObjectResult(sessions.Select(s => new { s.Id, s.Title }));
        }
    }
}
