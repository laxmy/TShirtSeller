namespace webapi.Models
{
    public class UpdateTShirtRequest
    {
        public TShirtSize size { get; set; }

        public string previewUrl { get; set; }

        public string style { get; set; }

        public string color { get; set; }

        public Gender gender { get; set; }

        public string made { get; set; }

        public double priceInUSD { get; set; }

        public string description { get; set; }
    }
}
