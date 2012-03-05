﻿// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.Rex_SLGHexTx = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.Rex_SLGHexTx.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};
	
	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function()
	{
        this.check_name = "LAYOUT";
        this.PositionOX = this.properties[0];
        this.PositionOY = this.properties[1];
        this.width = this.properties[2];
        this.half_width = this.width/2;
        this.height = this.properties[3];
	};
   
	instanceProto.GetX = function(logic_x, logic_y)
	{
        return (logic_x*this.width)+((logic_y%2)*this.half_width)+this.PositionOX;
	};
	instanceProto.GetY = function(logic_x, logic_y)
	{
        return (logic_y*this.height)+this.PositionOY;
	};   
	instanceProto.CreateItem = function(obj_type,x,y,layer,offset_x,offset_y)
	{
        return this.runtime.createInstance(obj_type, layer,this.GetX(x,y)+offset_x,this.GetY(x,y)+offset_y );        
	}; 	
	//////////////////////////////////////
	// Conditions
	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;    
    
	//////////////////////////////////////
	// Actions
	pluginProto.acts = {};
	var acts = pluginProto.acts;

	//////////////////////////////////////
	// Expressions
	pluginProto.exps = {};
	var exps = pluginProto.exps;

}());