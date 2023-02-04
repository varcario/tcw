﻿namespace FileUploadApi.Response.Models
{
    public class AddressModel
    {
        public int Id { get; set; }
        public string? StreetAddress { get; set; }
        public string? Suite { get; set; }
        public string? City { get; set; }
        public string? ZipCode { get; set; }
        public int StateId { get; set; }
    }
}
