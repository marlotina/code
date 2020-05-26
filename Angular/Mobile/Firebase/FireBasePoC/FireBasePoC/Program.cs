using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FireBasePoC
{
    class Program
    {
        static void Main(string[] args)
        {
            FireBasePush push = new FireBasePush("");

            push.SendPush(new PushMessage()
            {
                to = "/topics/news", //for a topic to": "/topics/foo-bar"
                notification = new PushMessageData
                {
                    title = "title push",
                    text = "body text",
                    click_action = "click_action"
                },
                data = new
                {
                    example = "ey this is a example"
                }
            });

        }
    }
}
