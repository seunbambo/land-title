// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Ownable.sol";


contract LandRegistry is Ownable {
    string private _country;
    string private _city;
    string private _landaddress;
    string private _latitude;
    string private _longitude;

    constructor(
        string memory country,
        string memory city,
        string memory landaddress,
        string memory latitude,
        string memory longitude
    ) public {
        _country = country;
        _city = city;
        _landaddress = landaddress;
        _latitude = latitude;
        _longitude = longitude;
    }

    function country() public view returns (string memory) {
        return _country;
    }

    function city() public view returns (string memory) {
        return _city;
    }

    function landaddress() public view returns (string memory) {
        return _landaddress;
    }

    function latitude() public view returns (string memory) {
        return _latitude;
    }

    function longitude() public view returns (string memory) {
        return _longitude;
    }
}
