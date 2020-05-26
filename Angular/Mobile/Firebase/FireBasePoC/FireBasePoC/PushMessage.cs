namespace FireBasePoC
{
    public class PushMessage
    {
        public dynamic data { get; set; }

        public string to { get; set; }

        public PushMessageData notification { get; set; }

        public dynamic click_action { get; set; }
    }
}
