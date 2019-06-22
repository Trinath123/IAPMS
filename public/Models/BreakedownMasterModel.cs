using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TMPUSApp.Models
{
    public class BreakedownMasterModel
    {
        public long ID { get; set; }
        public bool IsClosed { get; set; }
        public DateTime IssueRaisedDateTime { get; set; }
        public string IssueDescription { get; set; }
        public string Issuestatus { get; set; }
        public string BreakdownIssueID { get; set; }
        public DateTime? IssueClosedDateTime { get; set; }
        public long ToolID { get; set; }
    }
}