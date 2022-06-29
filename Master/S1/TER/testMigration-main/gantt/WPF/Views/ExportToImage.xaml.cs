#region Copyright Syncfusion Inc. 2001-2022.
// Copyright Syncfusion Inc. 2001-2022. All rights reserved.
// Use of this code is subject to the terms of our license.
// A copy of the current license can be obtained at any time by e-mailing
// licensing@syncfusion.com. Any infringement will be prosecuted under
// applicable laws. 
#endregion
using syncfusion.demoscommon.wpf;
using Syncfusion.Windows.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace syncfusion.ganttdemos.wpf
{
    /// <summary>
    /// Interaction logic for ExportToImage.xaml
    /// </summary>
    public partial class ExportToImage : DemoControl
    {
        ExportToImageViewModel exportToImageViewModel;
        public ExportToImage()
        {
            InitializeComponent();
        }

        protected override void Dispose(bool disposing)
        {
            if (exportToImageViewModel == null)
                exportToImageViewModel = this.DataContext as ExportToImageViewModel;
            
            exportToImageViewModel.Dispose();
            base.Dispose(disposing);
        }
    }
}
