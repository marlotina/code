using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Queue; 

class Program
{
    static string ConnectionString ="DefaultEndpointsProtocol=https;EndpointSuffix=core.windows.net;AccountName=stia06052020;AccountKey=K2dShFZMDflJTIO+9Z58UajifMCBGMBUu6DGs8th0ezhigUwpKnk8Q7QItWWqQMWUP4aMC7YGnylUp4SbVtHYg==";
    
    static async Task Main(string[] args)
    {
        if (args.Length > 0)
        {
            string value = String.Join(" ", args);
            SendArticleAsync(value);
            Console.WriteLine($"Sent: {value}");
        }
        else
        {
            string value = await ReceiveArticleAsync();
            Console.WriteLine($"Received {value}");
        }
    }

    static CloudQueue GetQueue()
    {
        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConnectionString);

        CloudQueueClient queueClient = storageAccount.CreateCloudQueueClient();
        return queueClient.GetQueueReference("newsqueue");
    }

    static async Task SendArticleAsync(string newsMessage)
    {
        CloudQueue queue = GetQueue();

        bool createdQueue = await queue.CreateIfNotExistsAsync();
        if (createdQueue)
        {
            Console.WriteLine("The queue of news articles was created.");
        }


        CloudQueueMessage articleMessage = new CloudQueueMessage(newsMessage);
        await queue.AddMessageAsync(articleMessage);
    }

    static async Task<string> ReceiveArticleAsync()
    {
        CloudQueue queue = GetQueue();
        bool exists = await queue.ExistsAsync();
        if (exists)
        {
            CloudQueueMessage retrievedArticle = await queue.GetMessageAsync();
            if (retrievedArticle != null)
            {
                string newsMessage = retrievedArticle.AsString;
                await queue.DeleteMessageAsync(retrievedArticle);
                return newsMessage;
            }
        }

        return "<queue empty or not created>";
    }
}