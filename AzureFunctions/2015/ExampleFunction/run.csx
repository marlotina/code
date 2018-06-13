using System;
using Microsoft.Azure.WebJobs.Extensions;
using Microsoft.Azure.WebJobs;
//using Restsharp;

[FunctionName("wop")]
public static void Run([TimerTrigger("0 */5 * * * *", RunOnStartup = true)] myTimer, TraceWriter log)
{
    log.Info($"C# Timer trigger function executed at: {DateTime.Now}");
}
