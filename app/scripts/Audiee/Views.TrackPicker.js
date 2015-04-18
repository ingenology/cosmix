/**
 * View for the Track Selection drawer
 *
 * @file        Views.TrackPicker.js
 * @author      Doug Niccum <dniccumdesign[at]gmail.com>
 * @copyright   Copyright 2015, Doug Niccum (http://dniccumdesign.com)
 * @license     MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 */

define([
    'underscore',
    'backbone',
    'text!templates/TrackPicker.html',
    'Audiee/Models.Track'
], function(_, Backbone, TrackPickerV, TrackM) {

    return Backbone.View.extend({
        // parent DOM element
        el: $('#app-tracks-listing'),

        // cached template function
        template: _.template(TrackPickerV),

        // DOM events listeners
        events: {
            'click #pickerHeader'   : 'togglePicker',
            'click li.category'     : 'showCategory',
            'click .choice'         : 'addTrack'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'uploadFile', 'addTrack', 'createFileBlob'); //, '_fileSelected', '_fileLoaded', 'handleKey'
            this.el.bind('Audiee:fileLoaded', this._fileLoaded);
            this.render();
        },

        render: function() {
            $(this.el).html(this.template());
        },

        togglePicker: function(el) {
            if (!this.el.hasClass('active')) {
                var height = $('#editor-view').outerHeight();
                var drawerHeight = $('#app-tracks-listing').outerHeight() - $('#pickerHeader').outerHeight();
                $('#app-tracks-listing').animate({
                    'bottom': '0px'
                }, 200);
                $('#editor-view').animate({
                    'height': height - drawerHeight
                }, 200);

                // Add active class
                this.el.addClass('active');
            } else {
                $('#app-tracks-listing').animate({
                    'bottom': '-200px'
                }, 200, function() {
                    Audiee.Views.Editor.resizeView();
                });

                // Remove active class
                this.el.removeClass('active');
            }
            $('#app-tracks-listing .category-listing').toggleClass('show');
        },

        showCategory: function(e) {
            var $target = $(e.target);
            $target.siblings().removeClass('active');
            $target.addClass('active');
        },

        createFileBlob: function(directory, blob, fileName, opt_callback) {
            var onError = function(e) {
                console.log('There was an error', e);
            };

            directory.getFile(fileName, {create: true, exclusive: true}, function(fileEntry) {
                fileEntry.createWriter(function(writer) {
                    if (opt_callback) {
                        writer.onwrite = opt_callback;
                    }
                    writer.write(blob);
                }, onError);
            }, onError);
        },

        uploadFile: function(url, name) {
            var onError = function(e) {
                console.log('There was an error', e);
            };
            
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';

            xhr.onload = function(e) {
                if (this.status == 200) {

                    window.requestFileSystem(TEMPORARY, 1024*1024*5 , function(fs) {
                        var onWrite = function(evt) {
                            console.log('Write completed.');
                            // name is the track file name
                            $('li.choice').removeClass('active');
                            filer.open(name, function(file) {
                                Audiee.Player.loadFile(file, $('#menu-view'));
                            });
                        };

                        // Write file to the root directory.
                        Audiee.Views.TrackPicker.createFileBlob(fs.root, xhr.response, name, onWrite);
                    }, onError);
                }
            };

            xhr.send(null);
        },

        addTrack: function(e) {
            var $target = $(e.target),
                directory = '/track-library/' + $target.data('directory') + '/',
                track = $target.data('track');
            var exists = false;

            filer.ls('/', function(entries) {
                $.each(entries, function(index, value) {
                    if (value.name === track) {
                        exists = true;
                    }
                });
                if (exists) {
                    filer.open(track, function(file) {
                        Audiee.Player.loadFile(file, $('#menu-view'));
                    });
                } else {
                    Audiee.Views.TrackPicker.uploadFile(directory + track, track);   
                }
            });
            
        }
    });
});