using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Journey.API.Controllers
{
    public class TripsController : ApiController
    {
        [Authorize]
        public List<string> GetTrips()
        {
            return new List<string> { "Doboj", "Ljungby", "Helsingborg" };
        }
    }
    //[RoutePrefix("api/Trips")]
    //public class TripsController : ApiController
    //{
    //    [Authorize]
    //    [Route("")]
    //    public IHttpActionResult Get()
    //    {
    //        return Ok(Trip.CreateTrips());
    //    }
    //}

    #region Helpers

    //public class Trip
    //{
    //    public int Id { get; set; }

    //    public string Location { get; set; }

    //    public int TotalKm { get; set; }

    //    public static List<Trip> CreateTrips()
    //    {
    //        List<Trip> TripList = new List<Trip>
    //        {
    //            new Trip {Id = 1, Location = "Ljungby", TotalKm = 69 }
    //        };

    //        return TripList;
    //    }
    //}

    #endregion
}

