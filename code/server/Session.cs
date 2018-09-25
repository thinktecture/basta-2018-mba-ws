using System;
using System.Collections.Generic;

public class Session
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Abstract { get; set; }
    public List<Speaker> Speakers { get; set; }
}