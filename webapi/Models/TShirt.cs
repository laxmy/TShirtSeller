using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Gender
    {
        Male,
        Female
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum TShirtSize
    {
        S,
        M,
        L,
        XL,
        XXL
    }
    public class TShirt
    {
        public Guid id { get; set; }
        public TShirtSize size { get; set; }

        public string previewUrl{get; set; }

        public string style { get; set; }

        public string color { get; set; }

        public Gender gender { get; set; }

        public string made { get; set; }

        public double priceInUSD { get; set; }
            
        public string description { get; set; }

    }
}
