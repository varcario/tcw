// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace FileUploadApi.Entities
{
    public partial class Post
    {
        public int Id { get; set; }
        public int SpeakerId { get; set; }
        public string Description { get; set; }
        public string Imagepath { get; set; }
        public DateTime Ts { get; set; }
        public bool Published { get; set; }
    }
}