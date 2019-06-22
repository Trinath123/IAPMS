using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TMPUSApp.Models
{
    public class PreventiveMasterModel
    {
        public long ID { get; set; }
        public string IssueID { get; set; }
        public string Description { get; set; }
        public string ToolID { get; set; }
        public DateTime IssueRaisedTime { get; set; }
        public string Status { get; set; }
    }
}