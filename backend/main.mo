import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type ServiceInterest = {
    #softwareDevelopment;
    #itConsulting;
    #aiAutomation;
    #websiteBuilding;
    #hostingAndDomain;
  };

  type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    company : ?Text;
    serviceInterest : ServiceInterest;
    message : Text;
    timestamp : Time.Time;
  };

  var nextInquiryId = 0;
  let inquiries = Map.empty<Nat, Inquiry>();

  public shared ({ caller }) func submitInquiry(
    name : Text,
    email : Text,
    company : ?Text,
    serviceInterest : ServiceInterest,
    message : Text
  ) : async () {
    nextInquiryId += 1;
    let inquiry : Inquiry = {
      id = nextInquiryId;
      name;
      email;
      company;
      serviceInterest;
      message;
      timestamp = Time.now();
    };
    inquiries.add(nextInquiryId, inquiry);
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    switch (inquiries.get(id)) {
      case (?inquiry) { inquiry };
      case (null) { Runtime.trap("Inquiry not found") };
    };
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.values().toArray();
  };

  public shared ({ caller }) func findInquiriesByName(searchTerm : Text) : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can search inquiries");
    };
    inquiries.values().toArray().filter(func(inquiry) { inquiry.name.contains(#text searchTerm) });
  };
};
