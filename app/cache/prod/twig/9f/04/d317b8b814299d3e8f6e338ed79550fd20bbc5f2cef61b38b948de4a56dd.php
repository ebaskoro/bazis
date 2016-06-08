<?php

/* Default/index.html.twig */
class __TwigTemplate_9f04d317b8b814299d3e8f6e338ed79550fd20bbc5f2cef61b38b948de4a56dd extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html ng-app=\"app\">
<head>
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">
  <title>IMCV BAZIS</title>
  <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" />
  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans:600\" />
  ";
        // line 8
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "4fe151e_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_4fe151e_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/4fe151e_part_1_common_1.css");
            // line 9
            echo "    <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
  ";
        } else {
            // asset "4fe151e"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_4fe151e") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/4fe151e.css");
            echo "    <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
  ";
        }
        unset($context["asset_url"]);
        // line 11
        echo "  <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
</head>
<body ng-controller=\"ApplicationCtrl\">
  <nav class=\"navbar navbar-inverse navbar-fixed-top\">
    <div class=\"container\">
      <div class=\"navbar-header\">
        <a class=\"navbar-brand\" href=\"#/\">BAZIS</a>
      </div>
    </div>
  </nav>
  
  <div class=\"container\">
    <div ng-view autoscroll=\"true\"></div>
  </div>
  
  <nav class=\"navbar navbar-inverse navbar-fixed-bottom\">
    <div class=\"container\">
      <p class=\"navbar-text\">&copy; 2015 IMCV BAZIS | bazis.imcv.org.au</p>
    </div>
  </nav>
  
  <!-- Templates -->
  <script type=\"text/ng-template\" id=\"index.html\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-offset-9 col-sm-3 col-md-offset-9 col-md-3\">
        <button class=\"btn btn-primary btn-lg btn-block\" ng-click=\"start()\">Start Payment</button>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <h1>Pembayaran Zakat Fitrah, Fidyah, Maal dan Infak atau Sodaqoh.</h1>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <p>Assalamu'alaykum Wr Wb</p>
        <p>Di bulan Ramadan yang penuh berkah ini, IMCV terus berusaha untuk membantu kepedulian Bapak/Ibu sekalian terhadap ummat ini dengan membantu menyalurkan Zakat, Infaq, dan Sadaqah (ZIS) kepada pihak yang berhak menerima (mustahiq) yang salah satu tujuannya untuk memutus rantai kemiskinan dan kebodohan.</p>
        <p>Dengan izin Allah SWT, tahun lalu IMCV sudah menyalurkan ZIS lebih dari AUD20,000 di bulan Ramadan, dan total lebih dari AUD60,000 di tahun 2014 untuk membantu korban bencana di berbagai penjuru dunia, serta membantu fakir/miskin di Indonesia.</p>
        <p>Mari kita berpartisipasi kembali dan inshaAllah kami siap menyalurkan ZIS Bapak/Ibu:</p>
        <ol>
          <li>Zakat Fitrah: AUD12 per Jiwa</li>
          <li>Zakat Fidyah: AUD12 per Hari</li>
          <li>Zakat Maal: 2.5% dari Total harta kita (cash, emas, perak dan bisnis)</li>
          <li>Infaq/Sadaqah</li>
        </ol>
        <p>ZIS dapat disampaikan berupa cash ke masing-masing IMCV Center:</p>
        <ul>
          <li>Nur Edi (Westall) 0424310 911</li>
          <li>Toro (Surau Kita) 0401372 353</li>
          <li>Teddy (BM) 0424631516</li>
        </ul>
        <p>atau dengan menggunakan fasilitas online ini.</p>
        <p>Semoga Allah SWT memberkahi kita semua.</p>
        <p>Selamat beribadah!</p>
        <p>Wassalamu'alaykum Wr Wb</p>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-offset-9 col-sm-3 col-md-offset-9 col-md-3\">
        <button class=\"btn btn-primary btn-lg btn-block\" ng-click=\"start()\">Start Payment</button>
      </div>
    </div>
  </script>
  
  <script type=\"text/ng-template\" id=\"payments.html\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <progressbar max=\"[[ wizard.maximumStepCount ]]\" value=\"[[ stepNumber ]]\">[[ stepNumber ]] / [[ wizard.maximumStepCount ]]</progressbar>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <p>Silahkan masukan pembayaran yang anda inginkan di bawah ini:</p>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Zakat Fitrah</h4>
          <h6>\$12 per Jiwa</h6>
          <select class=\"form-control input-lg\" ng-model=\"payment.fitrah\" convert-to-number>
            <option value=\"0\">Tidak Ada</option>
            <option value=\"1\">1 Orang</option>
            <option value=\"2\">2 Orang</option>
            <option value=\"3\">3 Orang</option>
            <option value=\"4\">4 Orang</option>
            <option value=\"5\">5 Orang</option>
            <option value=\"6\">6 Orang</option>
            <option value=\"7\">7 Orang</option>
            <option value=\"8\">8 Orang</option>
            <option value=\"9\">9 Orang</option>
            <option value=\"10\">10 Orang</option>
          </select>
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Fidyah</h4>
          <h6>\$12 per Hari</h6>
          <select class=\"form-control input-lg\" ng-model=\"payment.fidyah\" convert-to-number>
            <option value=\"0\">Tidak Ada</option>
            <option value=\"1\">1 Hari</option>
            <option value=\"2\">2 Hari</option>
            <option value=\"3\">3 Hari</option>
            <option value=\"4\">4 Hari</option>
            <option value=\"5\">5 Hari</option>
            <option value=\"6\">6 Hari</option>
            <option value=\"7\">7 Hari</option>
            <option value=\"8\">8 Hari</option>
            <option value=\"9\">9 Hari</option>
            <option value=\"10\">10 Hari</option>
            <option value=\"11\">11 Hari</option>
            <option value=\"12\">12 Hari</option>
            <option value=\"13\">13 Hari</option>
            <option value=\"14\">14 Hari</option>
            <option value=\"15\">15 Hari</option>
            <option value=\"16\">16 Hari</option>
            <option value=\"17\">17 Hari</option>
            <option value=\"18\">18 Hari</option>
            <option value=\"19\">19 Hari</option>
            <option value=\"20\">20 Hari</option>
            <option value=\"21\">21 Hari</option>
            <option value=\"22\">22 Hari</option>
            <option value=\"23\">23 Hari</option>
            <option value=\"24\">24 Hari</option>
            <option value=\"25\">25 Hari</option>
            <option value=\"26\">26 Hari</option>
            <option value=\"27\">27 Hari</option>
            <option value=\"28\">28 Hari</option>
            <option value=\"29\">29 Hari</option>
            <option value=\"30\">30 Hari</option>
          </select>
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Zakat Maal</h4>
          <h6>2.5% dari total harta kita (uang kas, emas, perak dan pendapatan bisnis)</h6>
          <input type=\"text\" class=\"form-control input-lg\" ng-model=\"payment.maal\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Infak atau Sodaqoh</h4>
          <input type=\"text\" class=\"form-control input-lg\" ng-model=\"payment.infak\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-6 col-sm-3 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-default\" ng-click=\"previous()\">Back</button>
      </div>
      <div class=\"col-xs-6 col-sm-offset-6 col-sm-3 col-md-offset-6 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-primary\" ng-click=\"next()\">Continue</button>
      </div>
    </div>
  </script>
  
  <script type=\"text/ng-template\" id=\"summary.html\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <progressbar max=\"[[ wizard.maximumStepCount ]]\" value=\"[[ stepNumber ]]\">[[ stepNumber ]] / [[ wizard.maximumStepCount ]]</progressbar>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <p>Berikut ini adalah rangkuman pembayaran anda. Silahkan melanjutkan ke layar berikutnya.</p>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <table class=\"table table-bordered\">
          <tr ng-show=\"payment.fitrah\">
            <td>Zakat Fitrah:</td>
            <td class=\"text-center\">\$12</td>
            <td class=\"text-center\">x</td>
            <td class=\"quantity text-center\">[[ payment.fitrah ]]</td>
            <td class=\"text-center\">=</td>
            <td class=\"total text-right\">\$[[ 12 * payment.fitrah ]]</td>
          </tr>
          <tr ng-show=\"payment.fidyah\">
            <td>Fidyah:</td>
            <td class=\"text-center\">\$12</td>
            <td class=\"text-center\">x</td>
            <td class=\"quantity text-center\">[[ payment.fidyah ]]</td>
            <td class=\"text-center\">=</td>
            <td class=\"total text-right\">\$[[ 12 * payment.fidyah ]]</td>
          </tr>
          <tr ng-show=\"maal\">
            <td colspan=\"5\">Zakat Maal:</td>
            <td class=\"total text-right\">\$[[ maal ]]</td>
          </tr>
          <tr ng-show=\"infak\">
            <td colspan=\"5\">Infak / Sodaqoh:</td>
            <td class=\"total text-right\">\$[[ infak ]]</td>
          </tr>
          <tr>
            <td colspan=\"5\">
              <h3>Total Pembayaran:</h3>
            </td>
            <td class=\"text-right\">
              <h3 class=\"total\">\$[[ payment.total ]]</h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-6 col-sm-3 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-default\" ng-click=\"previous()\">Back</button>
      </div>
      <div class=\"col-xs-6 col-sm-offset-6 col-sm-3 col-md-offset-6 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-primary\" ng-click=\"next()\">Continue</button>
      </div>
    </div>
  </script>
  
  <script type=\"text/ng-template\" id=\"payer.html\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <progressbar max=\"[[ wizard.maximumStepCount ]]\" value=\"[[ stepNumber ]]\">[[ stepNumber ]] / [[ wizard.maximumStepCount ]]</progressbar>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <p>Silahkan masukan nama dan nomor kontak anda. Bila anda menyertai alamat email anda maka kami akan mengirimkan instruksi pembayaran ke alamat email anda.</p>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-7 col-md-7\">
        <div class=\"form-group\" ng-class=\"{'has-error': nameError}\">
          <h4>Nama Lengkap <span class=\"glyphicon glyphicon-asterisk text-danger\"></span></h4>
          <input type=\"text\" class=\"form-control input-lg\" ng-model=\"payment.name\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-5 col-md-5\">
        <div class=\"form-group\" ng-class=\"{'has-error': mobileError}\">
          <h4>Nomor Telefon <span class=\"glyphicon glyphicon-asterisk text-danger\"></span></h4>
          <input type=\"text\" class=\"form-control input-lg\" ng-model=\"payment.mobile\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-7 col-md-7\">
        <div class=\"form-group\">
          <h4>Alamat Email</h4>
          <input type=\"email\" class=\"form-control input-lg\" ng-model=\"payment.email\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-6 col-sm-3 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-default\" ng-click=\"previous()\">Back</button>
      </div>
      <div class=\"col-xs-6 col-sm-offset-6 col-sm-3 col-md-offset-6 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-primary\" ng-click=\"next()\">Continue</button>
      </div>
    </div>
  </script>
  
  <script type=\"text/ng-template\" id=\"confirmation.html\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <progressbar max=\"[[ wizard.maximumStepCount ]]\" value=\"[[ stepNumber ]]\">[[ stepNumber ]] / [[ wizard.maximumStepCount ]]</progressbar>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <h3>Jazakumullah, [[ payment.name ]].</h3>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <p>Pembayaran anda sudah kami catat.</p>
        <p>Mohon untuk transfer pembayaran tersebut ke rekening Bazis IMCV dengan rincian di bawah ini.</p>
        <p>Account Name: IMCV Inc. BAZIS</p>
        <p>BSB: 083144</p>
        <p>Account Number: 944280572</p>
        <p>Description: [[ payment.reference ]]</p>
        <p>Amount: \$[[ payment.total ]]</p>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-offset-9 col-sm-3 col-md-offset-9 col-md-3\">
        <button class=\"btn btn-block btn-lg btn-primary\" ng-click=\"done()\">Done</button>
      </div>
    </div>
  </script>
  
  <!-- Message modal dialog -->
  <script type=\"text/ng-template\" id=\"messageDialog.html\">
    <div class=\"modal-header\">
      <h3 class=\"modal-title\">[[ title ]]</h3>
    </div>
    <div class=\"modal-body\">
      [[ message ]]
    </div>
    <div class=\"modal-footer\">
      <button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"ok()\">OK</button>
    </div>
  </script>
  
  <!-- Progress modal dialog -->
  <script type=\"text/ng-template\" id=\"progressDialog.html\">
    <div class=\"modal-header\">
      <h3 class=\"modal-title\">Processing...</h3>
    </div>
    <div class=\"modal-body\">
      <p>Mohon ditunggu.</p>
      <p>Jangan lupa untuk membeli tiket Great Iftar. Tiket dapat di beli di <a href=\"http://ticket.imcv.org.au\">IMCV Ticket</a></p>
    </div>
    <div class=\"modal-footer\">
      <progressbar class=\"progress-striped active\"></progressbar>
    </div>
  </script>
  
  <!-- Vendor -->
  <script src=\"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular.js\"></script>
  <script src=\"//rawgit.com/angular/bower-angular-route/master/angular-route.min.js\"></script>
  <script src=\"//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min.js\"></script>
  
  ";
        // line 340
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "69f99b3_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_69f99b3_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/69f99b3_app_1.js");
            // line 341
            echo "    <script src=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
  ";
        } else {
            // asset "69f99b3"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_69f99b3") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/69f99b3.js");
            echo "    <script src=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
  ";
        }
        unset($context["asset_url"]);
        // line 343
        echo "  
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-64630294-2', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "Default/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  397 => 343,  383 => 341,  379 => 340,  46 => 11,  32 => 9,  28 => 8,  19 => 1,);
    }
}
